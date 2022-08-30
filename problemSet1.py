print('hello world')

# print('What is your name?')
name = input('What is your name? ') 


# strip removes whitespace from str and title capitalizes every first letter of word in str
name = name.strip().title()

#split users data into two seperate strings
first, middle, last = name.split(' ')

print(f'Hello, {middle}.')