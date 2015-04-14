using System;

namespace CSharpZoo
{
    class Fish : Animal
    {
        public Fish(string name, Region region)
            : base(name, region)
        {
        }

        public void Swim()
        {
            Do("Swim");
        }
    }
}
