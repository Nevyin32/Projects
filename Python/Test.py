name=input("write the file name with the extension: ")
with open(name,'w') as file:
    text= input("what do you want to type in the text: ")
    file.write(text)