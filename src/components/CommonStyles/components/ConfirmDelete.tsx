import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  isLoading?: boolean;
  title?: string;
  subTitle?: string;
  func?: () => void;
  onClose?: () => void;
};

const ConfirmDelete = (props: Props) => {
  const {
    func,
    onClose,
    subTitle = "This action cannot be undone.",
    title = "Are you sure you want to delete it?",
    isLoading,
  } = props;
  return (
    <div className="component:ConfirmDelete flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <span className="text-xl font-semibold text-black">{title}</span>
        <span>{subTitle}</span>
      </div>
      <div className="flex justify-end gap-2">
        <Button className="bg-transparent text-black font-medium" onClick={onClose}>
          Cancel
        </Button>
        <Button className="bg-red-600 font-medium" onClick={func} isLoading={isLoading}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
