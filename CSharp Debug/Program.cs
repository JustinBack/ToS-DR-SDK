using System;
using System.Collections.Generic;
using tosdr.models;

namespace SDK_Debug
{
    class Program
    {


        static void Main(string[] args)
        {


            tosdr.Service.fetch("facebook", fetchServiceCompleted);

            Console.ReadLine();
        }



        private static void fetchServiceCompleted(Service service)
        {
            Console.WriteLine(service.name);
        }


        private static void fetchAllServiceCompleted(List<Service> services, int? version)
        {
            foreach(Service service in services)
            {
                Console.WriteLine(service.name);
            }
            Console.WriteLine(version);
        }

    }
}
