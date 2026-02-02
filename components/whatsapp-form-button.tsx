"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { MessageCircle } from "lucide-react"

const FORM_IFRAME_SRC = "https://prosync.tech/forms/FORMB29732AD"

export function WhatsAppFormButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Abrir formulário de contato"
      >
        <MessageCircle className="h-7 w-7" strokeWidth={2} />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-h-[90vh] w-[calc(100%-2rem)] overflow-hidden p-0 sm:max-w-155"
          showCloseButton={true}
        >
          <DialogTitle className="sr-only">
            Formulário de contato
          </DialogTitle>
          <div className="flex max-h-[85vh] flex-col">
            <div className="flex-1 overflow-auto p-4 pt-6">
              <iframe
                src={FORM_IFRAME_SRC}
                title="Formulário de contato"
                width="100%"
                height="600"
                className="mx-auto block max-w-150 border-0"
                style={{ minHeight: "500px" }}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
