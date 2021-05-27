using System;
using System.Collections.Generic;

List<string> wishes = new List<string> {
    "The ability to fly, but, like, really fast...not just, like, how fast I can walk, but, like, fast, you know?","A washtub of Skittles","The ability to think of interesting wishes on short notice",
    "A TV that is NOT internet-capable", "World peace, but not the kind of world peace where all the humans are removed from existence", "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds"
};

Console.WriteLine("My Wishes...");

foreach (string wish in wishes)
{
    Console.WriteLine(wish);
}
