class User:
    def __init__(self, id, firstName, lastName, email, ssn, image):
        self.id = id
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.ssn = ssn
        self.image = image

    def to_dict(self):
        return {
            "id": self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "email": self.email,
            "ssn": self.ssn,
            "image": self.image
        }