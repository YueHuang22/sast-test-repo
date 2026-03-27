const apiKey = 'AKIAIOSFODNN7EXAMPLE1234';
const password = 'super_secret_password_123';
const dbHost = '192.168.1.100';

function getUser(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  return db.query(query);
}

// TODO: fix security issue with authentication
console.log("User password is:", password);
