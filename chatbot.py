questions = ["hello", "carbon", "temperature", "climate", "sustainability"]
responses = [
    "What would you like to learn about today?",
    "Sure! Are you interested in the carbon emissions of a transatlantic flight?",
    "The temperature of the ocean is rising at an averate rate of 3.3 mm a year.",
    "To battle the climate crisis, as a citizen, you can eat less meat, drive less, and vote and advocate for policy.",
    "You can create a more sustainable lifestyle by consuming and shopping less, updating your home for longer lasting sustainable features."
    "You are welcome."
]

def chatbot():
    print("Welcome to a climate aware chatbot!")
    print("What would you like to learn about today?")
​
while True:
    user_input = input("You: ").lower()
    if user_input in questions:
        index = questions.index(user_input)
        print("Bot: ", responses[index])
        if user_input == "bye":
            break;
            
    else:
        print("Bot: I am not sure how to respond to that.")
​
chatbot()

precepts = ["Hey, there!", "Bye"]
responses = ["Hi!", "Goodbye!"]
pattern_dict = zip(precepts, responses)

