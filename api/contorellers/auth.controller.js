export const register = async (req, res) => {
    try {
        const newUser = new User({
            username: "testUser",
            email: "testEmail",
            password: "testPassword",
            country: "testCountry",
        }
        );
        await newUser.save();
        res.status(201).send("newUser has been created");
    }
    catch (error) {
        res.status(500).send("something went wrong");

    }
}
export const login = async (req, res) => {

}
export const logout = async (req, res) => {

}