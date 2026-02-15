from tkinter import *
import math

root = Tk()
blank_space = " "
root.title (50 * blank_space + "VS Code Calculation")
root.resizable(width = False, height = False)
root.geometry("438x573+460+40")

coverFrame = Frame (root, bd = 20, pady=2, relief = RIDGE)
coverFrame.grid()

coverMainFrame = Frame (coverFrame, bd = 10, pady=2, bg='cadetblue', relief = RIDGE)
coverMainFrame.grid()

MainFrame = Frame (coverMainFrame, bd = 5, pady=2, relief = RIDGE)
MainFrame.grid()

class Calculator():
    def __init__(self):
        self.total = 0
        self.current = ""
        self.input_value = True
        self.check_sum = False
        self.op = ""
        self.result = False

added_val = Calculator()
entDisplay = Entry(MainFrame, font=('arial',18,'bold'), bd=14, width=26, bg='cadetblue', justify=RIGHT)
entDisplay.grid(row = 0, column=0, columnspan=4, pady=1)
entDisplay.insert(0, "0")

numberpad = "789456123"
i = 0
btn = []

for j in range(3,6):
    for k in range(3):
        btn.append(Button(MainFrame, width=6,height=2,font=('arial',16,'bold'),bd=4, text=numberpad[i]))
        btn[i].grid(row=j,column=k,pady=1)
        i += 1

        btnBackSpace=Button(MainFrame, width=6, height=2, font=('arial',16,'bold'), bd=4, text="<-",bg='cadetblue')
        btnBackSpace.grid(row=1, column=0, pady=1)
root.mainloop()
