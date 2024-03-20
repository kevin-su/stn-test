import "./skeleton.scss";

export function Skeleton({
  minWidth = "",
  minHeight = "",
}: {
  minWidth?: string;
  minHeight?: string;
}) {
  return (
    <div
      className="skeleton"
      style={{
        minWidth: `${minWidth || "100%"}`,
        minHeight: `${minHeight || "32px"}`,
      }}
    ></div>
  );
}
