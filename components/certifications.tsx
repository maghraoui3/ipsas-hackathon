'use client'

import { useState, useEffect } from 'react'
import { Client, PrivateKey, AccountId, TokenCreateTransaction, TokenType, TokenSupplyType } from "@hashgraph/sdk"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Certifications() {
  const [certifications, setCertifications] = useState<{ id: string; name: string; date: string; tokenId: string }[]>([])

  useEffect(() => {
    // This is a mock function. In a real application, you'd fetch the user's certifications from your backend.
    const fetchCertifications = async () => {
      // Mock data
      const mockCertifications = [
        { id: '1', name: 'Introduction to Blockchain', date: '2023-05-15', tokenId: '0.0.123456' },
        { id: '2', name: 'Advanced JavaScript', date: '2023-06-01', tokenId: '0.0.789012' },
      ]
      setCertifications(mockCertifications)
    }

    fetchCertifications()
  }, [])

  const issueCertificate = async (name: string) => {
    try {
      // Initialize the Hedera client
      const client = Client.forTestnet()
      
      // Use your Hedera account ID and private key
      const myAccountId = AccountId.fromString(process.env.NEXT_PUBLIC_HEDERA_ACCOUNT_ID!)
      const myPrivateKey = PrivateKey.fromString(process.env.NEXT_PUBLIC_HEDERA_PRIVATE_KEY!)
      
      client.setOperator(myAccountId, myPrivateKey)

      // Create a new token (certificate) on the Hedera network
      const transaction = new TokenCreateTransaction()
        .setTokenName(name)
        .setTokenSymbol("CERT")
        .setTokenType(TokenType.NonFungibleUnique)
        .setSupplyType(TokenSupplyType.Finite)
        .setInitialSupply(0)
        .setMaxSupply(1)
        .setTreasuryAccountId(myAccountId)
        .setAdminKey(myPrivateKey.publicKey)
        .setSupplyKey(myPrivateKey.publicKey)
        .freezeWith(client)

      const signTx = await transaction.sign(myPrivateKey)
      const txResponse = await signTx.execute(client)
      const receipt = await txResponse.getReceipt(client)
      const tokenId = receipt.tokenId

      console.log(`Certificate issued with token ID: ${tokenId?.toString()}`)

      // In a real application, you'd store this token ID in your database
      // and associate it with the user who earned the certificate
      setCertifications([...certifications, { id: Date.now().toString(), name, date: new Date().toISOString().split('T')[0], tokenId: tokenId?.toString() || '' }])

    } catch (error) {
      console.error("Error issuing certificate:", error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Certifications</CardTitle>
      </CardHeader>
      <CardContent>
        {certifications.map((cert) => (
          <div key={cert.id} className="mb-4 p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{cert.name}</h3>
              <Badge variant="outline">{cert.date}</Badge>
            </div>
            <p className="text-sm text-gray-500 mb-2">Token ID: {cert.tokenId}</p>
            <Button variant="outline" size="sm" onClick={() => window.open(`https://hashscan.io/testnet/token/${cert.tokenId}`, '_blank')}>
              View on HashScan
            </Button>
          </div>
        ))}
        <Button 
          onClick={() => issueCertificate("New Certification")} 
          className="mt-4 bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-white dark:text-[#0B2C67] dark:hover:bg-gray-200 shadow-lg"
        >
          Issue New Certificate
        </Button>
      </CardContent>
    </Card>
  )
}

