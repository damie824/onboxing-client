import { useEffect } from "react";

export default function DeliveryMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const menu = document.getElementById("delivery-menu");
    const bar = document.getElementById("delivery-menu-bar");

    if (bar && menu) {
      bar.onmousedown = (e) => {
        let shift = e.clientY - menu.getBoundingClientRect().top;

        menu.style.transition = "none";
        function moveAt(pageY: number) {
          if (window.innerHeight - pageY < (window.innerHeight / 10) * 4) {
            return;
          }
          if (menu) {
            menu.style.top = pageY - shift + "px";
          }
        }

        function onMouseMove(event: MouseEvent) {
          moveAt(event.pageY);
        }

        document.addEventListener("mousemove", onMouseMove);

        document.onmouseup = function (e) {
          document.removeEventListener("mousemove", onMouseMove);
          menu.style.transition =
            "bottom 0.5s ease-in-out, top 0.5s ease-in-out";
          document.onmouseup = null;
          if (e.pageY < (window.innerHeight / 10) * 4) {
            menu.style.top = "0";
          } else {
            menu.style.top = "60vh";
          }
        };
      };
    }
  }, []);

  return (
    <div id="delivery-menu" className="delivery-menu">
      <div id="delivery-menu-bar" className="delivery-menu-bar-container">
        <div className="delivery-menu-bar"></div>
      </div>
      {children}
    </div>
  );
}
