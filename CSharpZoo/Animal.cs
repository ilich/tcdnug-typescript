using System;

namespace CSharpZoo
{
    abstract class Animal : IAnimal
    {
        public string Name
        {
            get;
            set;
        }

        public Region Region
        {
            get;
            private set;
        }

        public Animal(string name, Region region)
        {
            Name = name;
            Region = region;
        }

        public void Eat()
        {
            Do("Eat");
        }

        public void Sleep()
        {
            Do("Sleep");
        }

        protected virtual void Do(string action)
        {
            Console.WriteLine("{0}/{1}: {2}", Name, Region, action);
        }
    }
}
