using System;

namespace CSharpZoo
{
    class Program
    {
        static void Main(string[] args)
        {
            var bass = new Fish("Bass", Region.America);
            var trout = new Fish("Trout", Region.America);
            var albatross = new Bird("Albatross", Region.Asia, 14.0);
            var ostrich = new Bird("Ostrich", Region.Africa, 140.0);
            var emu = new Bird("Emu", Region.Australia, 40.0);

            var zoo = new Zoo();
            zoo.Add(bass, trout, albatross, ostrich, emu);

            for (var i = 0; i < 5; i++)
            {
                if (i % 2 == 0)
                {
                    zoo[i].Eat();
                }
                else
                {
                    zoo[i].Sleep();
                }
            }

            bass.Swim();
            ostrich.Fly();

            Console.WriteLine("Total Birds: {0}", Bird.TotalBirds); 
        }
    }
}
