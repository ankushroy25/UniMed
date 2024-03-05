const express = require("express")
const app = express()
const productRoutes = require("./productRoutes")
const categoryRoutes = require("./categoryRoutes")
const userRoutes = require("./userRoutes")
const orderRoutes = require("./orderRoutes")

const jwt = require("jsonwebtoken");

app.get("/logout", (req, res) => {
  return res.clearCookie("access_token").send("access token cleared");
});
app.get("/appointments", (req, res) => {
    return res.send("Fuck")
}
);
app.get("/get-token", (req, res) => {
    try {
        const accessToken = req.cookies["access_token"];
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
        return res.json({ token: decoded.name, isAdmin: decoded.isAdmin });
    } catch (err) {
        return res.status(401).send("Unauthorized. Invalid Token");
    }
})
app.post('/book-appointment', (req, res) => {
    const { id } = req.body;
  
    // Find the appointment by ID
    const appointment = appointments.find(appointment => appointment.id === id);
  
    if (!appointment) {
      return res.status(404).send({ message: 'Appointment not found.' });
    }
  
    // Update the appointment to show that it has been booked
    appointment.booked = true;
  
    return res.send({ message: 'Appointment booked successfully.' });
  });
app.use("/products", productRoutes)
app.use("/categories", categoryRoutes)
app.use("/users", userRoutes)
app.use("/orders", orderRoutes)

module.exports = app