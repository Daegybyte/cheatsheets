package com.company;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws FileNotFoundException {
        Scanner scanner = new Scanner(System.in);
        System.out.println("enter a file name");
        String filename = scanner.next();
        String word = scanner.next();
        int wordCount = 0;

        try {
            FileInputStream fileInputStream = new FileInputStream(filename);
        }catch (FileNotFoundException e){
            System.out.println("file not found");
        }

        while(scanner.hasNext()){
            if (scanner.next().equals(word)){
                wordCount++;
            }
        }
        System.out.println("file: " + filename + " contains the word " + word + " " + wordCount + " times");
    }
}
