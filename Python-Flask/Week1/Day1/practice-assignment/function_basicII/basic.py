def countdown(num):
    output = []
    for x in range(num,-1,-1):
        output.append(x)
    return output

print(countdown(5))