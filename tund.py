price_per_item = float(input("Enter the price of item: "))
num_items = int( input("Enter the number of items: ") )
state_code = input("Enter the state code: ").upper()

total_price = price_per_item * num_items

tax = 0
if state_code == "UT":
    tax = 0.0685
elif state_code == "NV":
    tax = 0.08
elif state_code == "TX":
    tax = 0.0625
elif state_code == "AL":
    tax = 0.04
elif state_code == "CA":
    tax = 0.0825

discount = 0
if total_price >= 1000:
    discount = 0.03
elif total_price >= 5000:
    discount = 0.05
elif total_price >= 7000:
    discount = 0.07
elif total_price >= 10000:
    discount = 0.1
elif total_price >= 50000:
    discount = 0.15

discounted_price = total_price - total_price * discount
taxed_price = total_price + total_price * tax
taxed_discounted_price = taxed_price - taxed_price * discount

print("Total price: ", total_price)
print("Discounted price: ", discounted_price)
print("Taxed price: ", taxed_price)
print("Taxed discounted price: ", taxed_discounted_price)

