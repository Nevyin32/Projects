print("Welcome to Calculator")
d="true"
while d=="true":
    try:
        a=int(input("Enter the number 1: "))
        b=int(input("Enter the number 2: "))
        c=input("Do you want to add,sub,multiply,divide? ")
        if c==("add"):
            print("answer:",str(a+b))
        elif c==("sub"):
            print("answer:",str(a-b))
        elif c==("multiply"):
                print("answer:",str(a*b))
        elif c==("divide"):
            print("answer:",str(a//b))
        br = input("do you want to stop,"
                "just say 'break' or 'else' to continue: ")
        if br==("break"):
            break
    except Exception as e:
        print(e)
        print("try again")
