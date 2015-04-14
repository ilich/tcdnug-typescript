using System;

namespace CSharpZoo
{
    class Bird : Animal
    {
        public static int TotalBirds
        {
            get;
            private set;
        }

        public double Weight
        {
            get;
            set;
        }

        public Bird(string name, Region region)
            : base(name, region)
        {
            TotalBirds++;
        }

        public Bird(string name, Region region, double weight)
            : this(name, region)
        {
            Weight = weight;
        }

        public void Fly()
        {
            Do("Fly");
            Console.WriteLine("Bird's Weight: {0}", Weight);
        }
    }
}
