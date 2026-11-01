#include <iostream>
class library
{
    char name[20];
    char title[20];
    int price;
    library *next;
    library *prev;
    library *head;
    public:
    void getdata();
void library::getdata()
    {
        std::cout << "Enter the name of the book: ";
        std::cin >> name;
        std::cout << "Enter the title of the book: ";
        std::cin >> title;
        std::cout << "Enter the price of the book: ";
        std::cin >> price;
    }
    library() : price(0), next(nullptr), prev(nullptr), head(nullptr)
    {
        name[0] = '\0';
        title[0] = '\0';
    }
    void addbook()
    {
        library *newbook = new library;

        std::cout << "Enter the name of the book: ";
        std::cin >> newbook->name;
        std::cout << "Enter the title of the book: ";
        std::cin >> newbook->title;
        std::cout << "Enter the price of the book: ";
        std::cin >> newbook->price;

        if (head == nullptr)
        {
            head = newbook;
        }
        else
        {
            library *temp = head;
            while (temp->next != nullptr)
            {
                temp = temp->next;
            }
            temp->next = newbook;
            newbook->prev = temp;
        }
    }
};
int main()
{
    library l;
     
    l.getdata();
    l.addbook();
}
