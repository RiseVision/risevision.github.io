import RiseElixir

try do
  result =
    RiseElixir.Transactions.put(%{
      senderPublicKey: "bf4809a1a08c9dffbba741f0c7b9f49145602341d5fa306fb3cd592d3e1058b3",
      recipientId: "3303015780877366956R",
      amount: "1995.33766861",
      fee: "0.1"
    })

  IO.puts(result["success"])
  # true
catch
  err -> "API error #{err}"
end
