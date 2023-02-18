import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex255Cb, useFlex253Cb, useFlex254Cb, useFlex251Cb, useFlex252Cb, useFlex256Cb, useFlex257Cb, useFlex258Cb, useFlex261Cb, useFlex262Cb, useButton44Cb, useButton45Cb, useLink16Cb, useLink17Cb, useLink18Cb, useLink19Cb, useLink20Cb, useImage91Cb, useTextBox201Cb, useTextBox202Cb, useImage92Cb, useImage93Cb } from "../page-cbs/about.css";
import "../page-css/about.css.css";
import "../custom/about.css";

export default function AboutCss() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex255Props = useStore((state)=>state["about.css"]["Flex255"]);
const Flex255IoProps = useIoStore((state)=>state["about.css"]["Flex255"]);
const Flex255Cb = useFlex255Cb()
const Flex253Props = useStore((state)=>state["about.css"]["Flex253"]);
const Flex253IoProps = useIoStore((state)=>state["about.css"]["Flex253"]);
const Flex253Cb = useFlex253Cb()
const Flex254Props = useStore((state)=>state["about.css"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["about.css"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Flex251Props = useStore((state)=>state["about.css"]["Flex251"]);
const Flex251IoProps = useIoStore((state)=>state["about.css"]["Flex251"]);
const Flex251Cb = useFlex251Cb()
const Flex252Props = useStore((state)=>state["about.css"]["Flex252"]);
const Flex252IoProps = useIoStore((state)=>state["about.css"]["Flex252"]);
const Flex252Cb = useFlex252Cb()
const Flex256Props = useStore((state)=>state["about.css"]["Flex256"]);
const Flex256IoProps = useIoStore((state)=>state["about.css"]["Flex256"]);
const Flex256Cb = useFlex256Cb()
const Flex257Props = useStore((state)=>state["about.css"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["about.css"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Flex258Props = useStore((state)=>state["about.css"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["about.css"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex261Props = useStore((state)=>state["about.css"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["about.css"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Flex262Props = useStore((state)=>state["about.css"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["about.css"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Button44Props = useStore((state)=>state["about.css"]["Button44"]);
const Button44IoProps = useIoStore((state)=>state["about.css"]["Button44"]);
const Button44Cb = useButton44Cb()
const Button45Props = useStore((state)=>state["about.css"]["Button45"]);
const Button45IoProps = useIoStore((state)=>state["about.css"]["Button45"]);
const Button45Cb = useButton45Cb()
const Link16Props = useStore((state)=>state["about.css"]["Link16"]);
const Link16IoProps = useIoStore((state)=>state["about.css"]["Link16"]);
const Link16Cb = useLink16Cb()
const Link17Props = useStore((state)=>state["about.css"]["Link17"]);
const Link17IoProps = useIoStore((state)=>state["about.css"]["Link17"]);
const Link17Cb = useLink17Cb()
const Link18Props = useStore((state)=>state["about.css"]["Link18"]);
const Link18IoProps = useIoStore((state)=>state["about.css"]["Link18"]);
const Link18Cb = useLink18Cb()
const Link19Props = useStore((state)=>state["about.css"]["Link19"]);
const Link19IoProps = useIoStore((state)=>state["about.css"]["Link19"]);
const Link19Cb = useLink19Cb()
const Link20Props = useStore((state)=>state["about.css"]["Link20"]);
const Link20IoProps = useIoStore((state)=>state["about.css"]["Link20"]);
const Link20Cb = useLink20Cb()
const Image91Props = useStore((state)=>state["about.css"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["about.css"]["Image91"]);
const Image91Cb = useImage91Cb()
const TextBox201Props = useStore((state)=>state["about.css"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["about.css"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox202Props = useStore((state)=>state["about.css"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["about.css"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const Image92Props = useStore((state)=>state["about.css"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["about.css"]["Image92"]);
const Image92Cb = useImage92Cb()
const Image93Props = useStore((state)=>state["about.css"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["about.css"]["Image93"]);
const Image93Cb = useImage93Cb()

  return (<>
  <Flex1 className="p-about.css Flex255 bpt" {...Flex255Props} {...Flex255Cb} {...Flex255IoProps}>
<Flex1 className="p-about.css Flex254 bpt" {...Flex254Props} {...Flex254Cb} {...Flex254IoProps}>
<Flex1 className="p-about.css Flex252 bpt" {...Flex252Props} {...Flex252Cb} {...Flex252IoProps}>
<Image1 className="p-about.css Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
</Flex1>
<Flex1 className="p-about.css Flex251 bpt" {...Flex251Props} {...Flex251Cb} {...Flex251IoProps}>
<Link1 className="p-about.css Link20 bpt" {...Link20Props} {...Link20Cb} {...Link20IoProps}/>
<Link1 className="p-about.css Link18 bpt" {...Link18Props} {...Link18Cb} {...Link18IoProps}/>
<Link1 className="p-about.css Link17 bpt" {...Link17Props} {...Link17Cb} {...Link17IoProps}/>
<Link1 className="p-about.css Link16 bpt" {...Link16Props} {...Link16Cb} {...Link16IoProps}/>
<Link1 className="p-about.css Link19 bpt" {...Link19Props} {...Link19Cb} {...Link19IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about.css Flex253 bpt" {...Flex253Props} {...Flex253Cb} {...Flex253IoProps}>
<Button1 className="p-about.css Button45 bpt" {...Button45Props} {...Button45Cb} {...Button45IoProps}/>
<Button1 className="p-about.css Button44 bpt" {...Button44Props} {...Button44Cb} {...Button44IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about.css Flex256 bpt" {...Flex256Props} {...Flex256Cb} {...Flex256IoProps}>
<Flex1 className="p-about.css Flex257 bpt" {...Flex257Props} {...Flex257Cb} {...Flex257IoProps}>
<TextBox1 className="p-about.css TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
<TextBox1 className="p-about.css TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
</Flex1>
<Flex1 className="p-about.css Flex258 bpt" {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<Image1 className="p-about.css Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about.css Flex261 bpt" {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}>
<Flex1 className="p-about.css Flex262 bpt" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<Image1 className="p-about.css Image93 bpt" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
</Flex1>
</Flex1>
  </>);
}
