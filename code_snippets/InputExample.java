// public class HelloWorld {
//     public static void main(String[] args) {
//         System.out.println("Hello, World!");
//     }
// }
import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        // Create a Scanner object to read input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for input
        System.out.print("Enter something: ");

        // Read the input
        String userInput = scanner.nextLine();

        // Display the input
        System.out.println("You entered: " + userInput);
        
         System.out.print("Enter another thing: ");

        // Read the input
        String userInput2 = scanner.nextLine();

        // Display the input
        System.out.println("You entered: " + userInput2);
         System.out.print("the end");


        // Close the Scanner
        scanner.close();
    }
}
