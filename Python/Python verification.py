print("Hello guys in this program we are going to see")
print("finding colours,calculator and printing numbers.")
print("I have used for,while,if elif else statements in this program")
print()
print("Colour:")
a=int(input("How much time do you want to use colour program: "))
for i in range(0,a):
    b=input("Enter the starting of colour letter: ")
    if b=="r":
        print("red")
    elif b=="b":
        print("blue")
    elif b=="p":
        print("pink")
    elif b=="o":
        print("orange")
    elif b=="g":
        print("green")
    elif b=="m":
        print("meroun")
    elif b=="y":
        print("yellow")
    elif b=="s":
        print("sandal")
    elif b=="i":
        print("indigo")
    elif b=="w":
        print("white")
    else:
        print("sorry I can't find it")
else:
    print("Thank you")
print()
print("Calculator:")
c=int(input("Enter first number: "))
d=int(input("Enter second number: "))
e=input("Do you want to add,sub,multiply or divide: ")
if e=="add":
    print("answer:",c+d)
elif e=="sub":
    print("answer:",c-d)
elif e=="multiply":
    print("answer:",c*d)
elif e=="divide":
    print("answer:",c//d)
print()
print("Number:")
f=0
n=0
g=int(input("Enter upto what number should be printed: "))
while f<g:
    n=n+1
    print(n)
    f=f+1
print()
print("Thank you for using my program")
