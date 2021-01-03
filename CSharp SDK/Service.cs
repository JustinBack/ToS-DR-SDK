using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using tosdr.models;

namespace tosdr
{
    public class Service
    {

        public static string APIUrl = "https://beta.tosdr.org/api/";
        public static int APIVersion = 3;

        public delegate void fetchDelegate(models.Service? service);
        public delegate void fetchAllDelegate(List<models.Service>? services, int? version);

        public static async void fetch(int ServiceID, fetchDelegate CallBack)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(APIUrl + APIVersion + "/" + ServiceID + ".json");
            request.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;

            using (HttpWebResponse response = (HttpWebResponse)await request.GetResponseAsync())
            using (Stream stream = response.GetResponseStream())
            using (StreamReader reader = new StreamReader(stream))
            {
                string json = await reader.ReadToEndAsync();

                CallBack(JsonConvert.DeserializeObject<ServiceRoot>(json).parameters);
            }
        }
        public static async void fetch(string ServiceSlug, fetchDelegate CallBack)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(APIUrl + APIVersion + "/" + ServiceSlug + ".json");
            request.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;

            using (HttpWebResponse response = (HttpWebResponse)await request.GetResponseAsync())
            using (Stream stream = response.GetResponseStream())
            using (StreamReader reader = new StreamReader(stream))
            {
                string json = await reader.ReadToEndAsync();

                CallBack(JsonConvert.DeserializeObject<ServiceRoot>(json).parameters);
            }
        }
        public static async void fetchAll(fetchAllDelegate CallBack)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(APIUrl + APIVersion + "/all.json");
            request.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;

            using (HttpWebResponse response = (HttpWebResponse)await request.GetResponseAsync())
            using (Stream stream = response.GetResponseStream())
            using (StreamReader reader = new StreamReader(stream))
            {
                string json = await reader.ReadToEndAsync();

                AllRoot allRoot = JsonConvert.DeserializeObject<AllRoot>(json);

                CallBack(allRoot.parameters.services, allRoot.parameters.version);
            }
        }
    }
}
