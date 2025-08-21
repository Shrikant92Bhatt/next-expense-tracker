'use client'

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type DynamicBreadcrumbProps = {
  labelMap?: Record<string, string>
  transformLabel?: (segment: string) => string
}

function defaultTransformLabel(segment: string): string {
  const decoded = decodeURIComponent(segment)
  return decoded
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

const DynamicBreadcrumb: React.FC<DynamicBreadcrumbProps> = ({
  labelMap,
  transformLabel = defaultTransformLabel,
}) => {
  const pathname = usePathname()

  const segments = React.useMemo(() => {
    return pathname
      .split("/")
      .filter(Boolean)
  }, [pathname])

  const items = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const label = labelMap?.[segment] ?? transformLabel(segment)
    const isLast = index === segments.length - 1

    return { href, label, isLast }
  })

  if (items.length === 0) {
    return null
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, idx) => (
          <React.Fragment key={item.href}>
            <BreadcrumbItem>
              {item.isLast ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {idx < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default DynamicBreadcrumb


