class Student:
    def __init__(self, name):
        self.name = name

    def display(self):
        print("Name:", self.name)

s = Student("Aleena")
s.display()
