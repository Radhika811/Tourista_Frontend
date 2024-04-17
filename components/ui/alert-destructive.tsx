"use client"

import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"
  
import { AlertCircle } from "lucide-react"

  export function AlertDestructive(props: { description: string } ) {
      const { description } = props;
    return (
      <Alert variant="destructive" className="w-[40%]">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {description}
        </AlertDescription>
      </Alert>
    )
  }