import React from 'react';

export const withToggle = (WrappedComponent: any) => (props: any) => {
  const [open, setOpen] = React.useState(false);

  const toggle = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setOpen(!open);
  };

  return (
    <WrappedComponent
      toggle={toggle}
      open={open}
      setOpen={setOpen}
      {...props}
    />
  );
};
