"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
})

export function DevisForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }

  return (
    <>
      <div className="w-full">
          <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* Information Personnel */}
             <section className="py-4 md:py-6">
              <h4 className="text-2xl md:text-3xl font-bold uppercase">Informations personnelles</h4>
              <div className="grid grid-cols-1 grid-cols-2 gap-4 my-8">
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-title">
                        Prénom
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="Login button not working on mobile"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

               <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Nom
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Login button not working on mobile"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
                />

               <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Nom
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Login button not working on mobile"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
                />

               <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Nom
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Login button not working on mobile"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
                />
              </div>
             </section>
              
              {/* Deatails du voyage */}
             <section className="py-4 md;py-6">
              <h4 className="text-2xl md:text-3xl font-bold uppercase">Détails du voyage</h4>
              <p>Destination(s) souhaitée(s)</p>
              <div className="grid grid-cols-1 md:grid-cols-6">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
              </div>

              {/* Types de voyage */}
              <div>
                <p>Type de voyage</p>
              </div>

              {/* Dates et autres details */}
              <div className="">
                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>1</div>
                  <div>2</div>
                </div>

                {/* Budgets */}
                <div>Budget</div>
              </div>
             </section>

              {/* Preferences de voyage */}
             <section className="py-4 md:py-6">
              <h4 className="text-2xl md:text-3xl font-bold uppercase">Préférences de voyage</h4>
             </section>

              {/* Information Additionnells */}
             <section>
              <h4 className="text-2xl md:text-3xl font-bold uppercase">Informations additionnelles</h4>
              
              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-description">
                      Description
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        id="form-rhf-demo-description"
                        placeholder="I'm having an issue with the login button on mobile."
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={fieldState.invalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.value.length}/100 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>
                      Include steps to reproduce, expected behavior, and what
                      actually happened.
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
             </section>

              {/* Tearms & Conditions */}
             <section className="py-4">
              <p>J'accepte que Suntrail Tours & Safaris utilise les informations soumises pour me contacter au sujet de ma demande de devis.</p>
             </section>

            </FieldGroup>
          </form>

          <Button type="submit" form="form-rhf-demo" className="w-full">
            Submit
          </Button>
      </div>
    </>
  )
}
