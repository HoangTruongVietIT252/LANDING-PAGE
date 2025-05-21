import React, { Fragment } from "react";
import useToggleDialog from "@/hooks/useToggleDialog";
import { TypeOfFilterHeader } from "@/interfaces/common.interface";
import { Button } from "@/components/ui/button";
import CommonIcons from "@/components/CommonIcons";

type OptionsRenderFilterHeader = {
  open: boolean;
  toggle: () => void;
};

export type RenderComponentHeadFilter = (options: OptionsRenderFilterHeader) => React.ReactNode;

interface Props {
  type?: TypeOfFilterHeader;
  label?: string | React.ReactNode;
  renderComponent?: RenderComponentHeadFilter;
}

const HeadFilters = ({
  type = TypeOfFilterHeader.dialog,
  renderComponent,
  label,
}: Props) => {
  const { open, toggle, shouldRender } = useToggleDialog();
  const isOpenAnDialog = type === TypeOfFilterHeader.dialog;

  const renderContent = () => {
    if (isOpenAnDialog) {
      if (!shouldRender) {
        return;
      }
    }

    return renderComponent && renderComponent({ open, toggle });
  };

  return (
    <Fragment>
      {renderContent()}

      <div className="flex items-center gap-1">
        {label}
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            if (type === TypeOfFilterHeader.dialog) {
              toggle();
            }
          }}
        >
          <CommonIcons.FilterIcon />
        </Button>
      </div>
    </Fragment>
  );
};

export default HeadFilters;
