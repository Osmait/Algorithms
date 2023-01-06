

class Node:
    def __init__(self, data):
        """
        Create and initialize Node class instance.
        >>> Node(20)
        Node(20)
        >>> Node("Hello, world!")
        Node(Hello, world!)
        >>> Node(None)
        Node(None)
        >>> Node(True)
        Node(True)
        """
        self.data = data
        self.next = None

    def __repr__(self) -> str:
        return f"Node({self.data})"


class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def __iter__(self):
        node = self.head
        while node:
            yield node.data
            node = node.next

    def __len__(self):
        return len(tuple(iter(self)))

    def __repr__(self) -> str:
        return "->".join([str(item) for item in self])

    def __getitem__(self, index):
        if not 0 <= index < len(self):
            raise ValueError("list index out of range")
        for i, node in enumerate(self):
            if i == index:
                return node

    def __setitem__(self, index, data):
        if not 0 <= index < len(self):
            raise ValueError("list index out of range")
        current = self.head
        for _ in range(index):
            current = current.next
        current.data = data

    def insert_tail(self, data):
        self.insert_nth(len(self), data)

    def insert_head(self, data):
        self.insert_nth(0, data)

    def insert_nth(self, index, data):
        if not 0 <= index <= len(self):
            raise IndexError("list index out of range")
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        elif index == 0:
            new_node.next = self.head
            self.head = new_node
        else:
            temp = self.head
            for _ in range(index-1):
                temp = temp.next
            new_node.next = temp.next
            temp.next = new_node

    def print_list(self):
        print(self)

    def delete_head(self):
        return self.delete_nth(0)

    def delete_tail(self):
        return self.delete_nth(len(self)-1)

    def delete_nth(self, index):

        if not 0 <= index <= len(self):
            raise IndexError("list index out of range")
        delete_node = self.head
        if index == 0:
            self.head = self.head.next
        else:
            temp = self.head
            for _ in range(index - 1):
                temp = temp.next
            delete_node = temp.next
            temp.next = temp.next.next
        return delete_node.data

    def is_empty(self):
        return self.head is None

    def reverse(self):
        prev = None
        current = self.head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node

        self.head = prev


def main():

    linked_list = LinkedList()
    linked_list.insert_head(input("Inserting 1st at head ").strip())
    linked_list.insert_head(input("Inserting 2nd at head ").strip())
    print("\nPrint list:")
    linked_list.print_list()
    linked_list.insert_tail(input("\nInserting 1st at tail ").strip())
    linked_list.insert_tail(input("Inserting 2nd at tail ").strip())
    print("\nPrint list:")
    linked_list.print_list()
    print("\nDelete head")
    linked_list.delete_head()
    print("Delete tail")
    linked_list.delete_tail()
    print("\nPrint list:")
    linked_list.print_list()
    print("\nReverse linked list")
    linked_list.reverse()
    print("\nPrint list:")
    linked_list.print_list()
    print("\nString representation of linked list:")
    print(linked_list)
    print("\nReading/changing Node data using indexing:")
    print(f"Element at Position 1: {linked_list[1]}")
    linked_list[1] = input("Enter New Value: ").strip()
    print("New list:")
    print(linked_list)  
    print(f"length of linked_list is : {len(linked_list)}")


if __name__ == "__main__":
    main()
