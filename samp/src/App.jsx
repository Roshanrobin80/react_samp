# Context class to store shared state
class Context:
    def _init_(self):
        self.state = {"theme": "light", "user": "Guest"}

    def set_state(self, key, value):
        if key in self.state:
            self.state[key] = value
        else:
            print(f"Key {key} not found in state!")

    def get_state(self):
        return self.state


# Function to simulate a component that uses the context
def ComponentA(context):
    theme = context.get_state().get("theme")
    user = context.get_state().get("user")
    print(f"ComponentA: Theme is {theme}, User is {user}")
    # Modify the context
    context.set_state("theme", "dark")


# Another function simulating another component that uses the context
def ComponentB(context):
    theme = context.get_state().get("theme")
    user = context.get_state().get("user")
    print(f"ComponentB: Theme is {theme}, User is {user}")


# Main code
context = Context()

print("Initial state:")
ComponentA(context)  # ComponentA can modify the context
print("\nAfter ComponentA modifies the context:")
ComponentB(context)  # ComponentB uses the modified context
