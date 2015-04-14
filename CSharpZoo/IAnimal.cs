namespace CSharpZoo
{
    interface IAnimal
    {
        string Name { get; set; }

        Region Region { get; }

        void Eat();

        void Sleep();
    }
}
