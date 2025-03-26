const router = require("express").Router();

module.exports = (db) => {
  // Search route for photos by username, location, or country
  router.get("/photos/search", (request, response) => {
    // Search query
    const { query } = request.query;

    // Query error handling
    if (!query) {
      return response.status(400).json({ error: "Search query is required" });
    }

    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 8001;
    const serverUrl = `${protocol}://${host}:${port}`;

    // Query to search photos by username, location, or country
    db.query(`
      SELECT 
      json_agg(
          json_build_object(
            'id', photo.id,
            'urls', json_build_object(
              'full', concat('${serverUrl}/images/', photo.full_url),
              'regular', concat('${serverUrl}/images/', photo.regular_url)
            ),
            'user', json_build_object(
              'username', user_account.username,
              'name', user_account.fullname,
              'profile', concat('${serverUrl}/images/', user_account.profile_url)
            ),
            'location', json_build_object(
              'city', photo.city,
              'country', photo.country
            )
          )
        ) as photo_data
      FROM photo
      JOIN user_account ON user_account.id = photo.user_id
      WHERE LOWER(user_account.fullname) LIKE LOWER($1) 
         OR LOWER(photo.city) LIKE LOWER($1)
         OR LOWER(photo.country) LIKE LOWER($1);
    `, [`%${query}%`])
    .then(({ rows }) => {
      response.json(rows[0].photo_data);
    })
    .catch((error) => {
      console.error('Error searching photos:', error);
      response.status(500).json({ error: 'Internal server error' });
    });
  });

  return router;
};