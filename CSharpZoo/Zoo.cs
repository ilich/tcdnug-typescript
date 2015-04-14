using System;
using System.Collections.Generic;

namespace CSharpZoo
{
    class Zoo
    {
        private List<IAnimal> _animals = new List<IAnimal>();

        public void Add(params IAnimal[] animals)
        {
            foreach(var animal in animals)
            {
                _animals.Add(animal);
            }
        }

        public IAnimal this[int id]
        {
            get
            {
                if (id > _animals.Count)
                {
                    throw new ArgumentException("id");
                }

                return _animals[id];
            }
        }
    }
}
