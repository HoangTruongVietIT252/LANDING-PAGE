"use client";
import * as React from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "../../ui/dialog";

interface Props {
  toggle: () => void;
  title?: string | React.ReactNode;
  content: string | React.ReactNode;
  footer?: string | React.ReactNode;
  open: boolean;
  disableClickOutside?: boolean;
  className?: string;
  isDetail?: boolean;
  style?: React.CSSProperties;
  styleContent?: React.CSSProperties;
  showCloseIcon?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

export default function DialogComponent(props: Props) {
  const {
    open,
    toggle,
    title,
    content = <span />,
    footer,
    maxWidth,
    disableClickOutside = false,
    className = "",
    isDetail,
    style,
    styleContent,
    showCloseIcon = false,
  } = props;

  const handleClose = () => {
    !disableClickOutside && toggle();
  };

  // Map MUI maxWidth to appropriate width values
  const getMaxWidthClass = () => {
    switch (maxWidth) {
      case "xs":
        return "max-w-xs";
      case "sm":
        return "max-w-sm";
      case "md":
        return "max-w-md";
      case "lg":
        return "max-w-lg";
      case "xl":
        return "max-w-xl";
      default:
        return "w-full";
    }
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && handleClose()}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50 z-40" />
        <DialogContent
          className={`fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 shadow-lg ${getMaxWidthClass()} ${className}`}
          style={style}
        >
          {showCloseIcon && (
            <DialogClose className="absolute top-2 right-2 rounded-full p-1 hover:bg-gray-100">
              <X size={18} />
            </DialogClose>
          )}

          {title && (
            <DialogHeader>
              <DialogTitle className="text-lg font-medium">
                {isDetail && (
                  <DialogClose className="absolute top-2 right-2 rounded-full p-1 hover:bg-gray-100">
                    <X size={18} />
                  </DialogClose>
                )}
                <div>{title}</div>
              </DialogTitle>
            </DialogHeader>
          )}

          <DialogDescription asChild>
            <div className="text-gray-700" style={styleContent}>
              {content}
            </div>
          </DialogDescription>

          {footer && <div className="mt-6 flex justify-end gap-2">{footer}</div>}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
