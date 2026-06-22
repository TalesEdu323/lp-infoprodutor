"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const FORM_IFRAME_SRC = "https://prosync.tech/forms/FORMB29732AD"

type ContactFormContextValue = {
  openContactForm: () => void
}

const ContactFormContext = createContext<ContactFormContextValue | null>(null)

export function useContactForm() {
  const context = useContext(ContactFormContext)
  if (!context) {
    throw new Error("useContactForm deve ser usado dentro de ContactFormProvider")
  }
  return context
}

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const hasBottomNav = pathname === "/"

  return (
    <ContactFormContext.Provider value={{ openContactForm: () => setOpen(true) }}>
      {children}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-subtle transition-opacity duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 xl:right-6",
          hasBottomNav ? "bottom-[4.75rem] xl:bottom-6" : "bottom-6",
        )}
        aria-label="Abrir formulário de contato"
      >
        <MessageCircle className="h-7 w-7" strokeWidth={2} />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-h-[90vh] w-[calc(100%-2rem)] overflow-hidden p-0 sm:max-w-155"
          showCloseButton={true}
        >
          <DialogTitle className="sr-only">Formulário de contato</DialogTitle>
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
    </ContactFormContext.Provider>
  )
}
