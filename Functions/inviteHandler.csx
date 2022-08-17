#r "Newtonsoft.Json"

using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;

public static async Task<IActionResult> Run(HttpRequest req, ILogger log)
{
    string result = req.Query["result"];
    string sender = req.Query["sender"];

    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
    dynamic data = JsonConvert.DeserializeObject(requestBody);
    result = result ?? data?.result;
    sender = sender ?? data?.sender;

    if (string.IsNullOrEmpty(result))
    {
        log.LogInformation("No result was passed");
        return new OkObjectResult("Invalid");
    }

    if (string.IsNullOrEmpty(sender))
    {
        log.LogInformation("No sender was passed");
        return new OkObjectResult("Invalid");
    }

    log.LogInformation($"Sender: {sender}");

    if (Convert.ToBoolean(result))
    {
        log.LogInformation("Result is: Yess!!");
    }
    else
    {
        log.LogInformation("Result is: nop :(.");
    }

    return new OkObjectResult("Ok");
}