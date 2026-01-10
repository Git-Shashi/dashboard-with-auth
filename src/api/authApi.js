export function loginApi(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "shashi@test.com" && password === "1234") {
        resolve({
          token: "fake-jwt-token-123",
          expiresIn: 3600,
        });
      } else {
        reject("Invalid email or password");
      }
    }, 1000);
  });
}
