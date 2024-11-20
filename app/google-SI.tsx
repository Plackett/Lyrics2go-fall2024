import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath } from 'react-native-svg';
const GoogleSI = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={175} height={40} fill="none" {...props}>
    <Rect width={174} height={39} x={0.5} y={0.5} fill="#fff" rx={3.5} />
    <G clipPath="url(#a)">
      <Path
        fill="#4285F4"
        d="M31.6 20.227c0-.709-.064-1.39-.182-2.045H22v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35Z"
      />
      <Path
        fill="#34A853"
        d="M22 30c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.596-4.123h-3.34v2.59A9.996 9.996 0 0 0 22 30Z"
      />
      <Path
        fill="#FBBC04"
        d="M16.404 21.9c-.2-.6-.313-1.24-.313-1.9 0-.66.113-1.3.313-1.9v-2.59h-3.34A9.997 9.997 0 0 0 12 20c0 1.614.386 3.14 1.064 4.49l3.34-2.59Z"
      />
      <Path
        fill="#E94235"
        d="M22 13.977c1.468 0 2.786.505 3.823 1.496l2.868-2.869C26.959 10.992 24.695 10 22 10c-3.91 0-7.29 2.24-8.936 5.51l3.34 2.59c.787-2.364 2.991-4.123 5.596-4.123Z"
      />
    </G>
    <Path
      fill="#1F1F1F"
      d="M48.248 22.436c0-.205-.032-.387-.096-.546a1.068 1.068 0 0 0-.32-.438 2.655 2.655 0 0 0-.657-.383 8.708 8.708 0 0 0-1.067-.39 11.796 11.796 0 0 1-1.312-.485 4.996 4.996 0 0 1-1.04-.629 2.69 2.69 0 0 1-.69-.827 2.316 2.316 0 0 1-.246-1.087c0-.405.085-.774.253-1.107.173-.333.417-.62.732-.861a3.5 3.5 0 0 1 1.128-.568 4.751 4.751 0 0 1 1.435-.205c.738 0 1.374.137 1.907.41.538.274.95.64 1.238 1.1.291.461.437.97.437 1.525h-1.702c0-.328-.07-.617-.212-.868a1.436 1.436 0 0 0-.629-.601c-.278-.146-.631-.22-1.06-.22-.405 0-.742.062-1.011.185a1.35 1.35 0 0 0-.602.5c-.132.21-.198.446-.198.71 0 .187.043.358.13.513.087.15.219.292.397.424.177.127.4.248.67.362.268.114.585.224.95.328a9.416 9.416 0 0 1 1.442.547c.41.196.752.42 1.025.67.274.25.479.536.616.855.136.314.205.672.205 1.073 0 .42-.085.797-.253 1.135a2.45 2.45 0 0 1-.725.854c-.31.233-.683.413-1.12.54a5.294 5.294 0 0 1-1.45.185c-.479 0-.95-.064-1.415-.192a4.175 4.175 0 0 1-1.258-.58 3.003 3.003 0 0 1-.902-.985c-.224-.397-.335-.86-.335-1.388h1.715c0 .324.055.6.165.827.114.228.27.415.471.56.2.142.433.247.698.315.268.069.556.103.86.103.402 0 .737-.057 1.006-.171.273-.114.478-.274.615-.479.137-.205.205-.442.205-.71Zm4.84-4.832V25h-1.654v-7.396h1.654Zm-1.764-1.942c0-.25.082-.458.246-.622.169-.169.401-.253.698-.253.291 0 .521.084.69.253a.831.831 0 0 1 .253.622.823.823 0 0 1-.253.615c-.169.164-.399.246-.69.246-.297 0-.53-.082-.698-.246a.834.834 0 0 1-.246-.615Zm8.306 1.941h1.497v7.192c0 .665-.141 1.23-.424 1.695a2.723 2.723 0 0 1-1.183 1.06c-.505.246-1.091.369-1.756.369a4.13 4.13 0 0 1-.944-.123 3.863 3.863 0 0 1-.998-.397 2.474 2.474 0 0 1-.8-.704l.773-.97c.264.314.556.544.875.69.319.146.654.219 1.005.219.378 0 .7-.07.964-.212.269-.137.476-.34.622-.608.146-.27.218-.598.218-.985v-5.55l.15-1.675Zm-5.025 3.78v-.143c0-.56.069-1.07.206-1.531.136-.465.332-.864.587-1.196.256-.338.566-.595.93-.773a2.729 2.729 0 0 1 1.237-.273c.479 0 .887.086 1.224.26.342.173.627.421.855.745.227.319.405.701.533 1.148.132.442.23.934.294 1.477v.458a7.392 7.392 0 0 1-.301 1.449 4 4 0 0 1-.56 1.135c-.233.319-.52.565-.862.738-.337.173-.736.26-1.196.26-.451 0-.86-.094-1.224-.28a2.784 2.784 0 0 1-.93-.787 3.725 3.725 0 0 1-.588-1.19 5.238 5.238 0 0 1-.205-1.496Zm1.648-.143v.144c0 .337.032.651.096.943.068.292.17.55.307.773.142.218.32.391.534.52.218.122.476.184.772.184.387 0 .704-.082.95-.246.25-.164.442-.386.574-.663.137-.283.233-.598.287-.944v-1.237a3.018 3.018 0 0 0-.17-.752 2.011 2.011 0 0 0-.335-.608 1.399 1.399 0 0 0-.534-.41c-.214-.1-.467-.151-.758-.151-.297 0-.554.064-.773.191a1.57 1.57 0 0 0-.54.527c-.137.223-.24.483-.307.779a4.216 4.216 0 0 0-.103.95Zm8.217-2.057V25h-1.648v-7.396h1.552l.096 1.579Zm-.294 1.845-.533-.006a4.812 4.812 0 0 1 .218-1.443c.146-.437.347-.813.602-1.128.26-.314.57-.556.93-.724.36-.174.76-.26 1.203-.26.355 0 .676.05.964.15.291.096.54.253.745.472.21.219.369.503.478.854.11.347.164.773.164 1.279V25h-1.654v-4.785c0-.356-.052-.636-.157-.841a.88.88 0 0 0-.445-.444c-.191-.091-.43-.137-.717-.137-.283 0-.536.06-.76.178-.222.118-.412.28-.567.485-.15.205-.266.442-.348.711a2.938 2.938 0 0 0-.123.861Zm11.703-3.424V25h-1.654v-7.396h1.654Zm-1.764-1.942c0-.25.082-.458.246-.622.169-.169.401-.253.698-.253.291 0 .521.084.69.253a.832.832 0 0 1 .253.622.823.823 0 0 1-.253.615c-.169.164-.399.246-.69.246-.297 0-.53-.082-.698-.246a.835.835 0 0 1-.246-.615Zm5.202 3.52V25H77.67v-7.396h1.552l.095 1.579Zm-.294 1.846-.533-.006a4.812 4.812 0 0 1 .219-1.443c.146-.437.346-.813.602-1.128.26-.314.57-.556.93-.724a2.74 2.74 0 0 1 1.202-.26c.356 0 .677.05.964.15.292.096.54.253.745.472.21.219.37.503.479.854.11.347.164.773.164 1.279V25H82.14v-4.785c0-.356-.053-.636-.158-.841a.88.88 0 0 0-.444-.444c-.191-.091-.43-.137-.718-.137-.282 0-.535.06-.758.178-.224.118-.413.28-.568.485-.15.205-.267.442-.349.711a2.938 2.938 0 0 0-.123.861Zm11.95 2.331 1.709-5.756h1.052l-.287 1.723L91.725 25h-.944l.192-1.64Zm-1.005-5.756 1.333 5.784.11 1.613h-1.054l-2.002-7.396h1.613Zm5.366 5.715 1.292-5.715h1.606L96.236 25h-1.052l.15-1.682Zm-1.422-5.715 1.689 5.688.212 1.709h-.944l-1.743-5.68-.287-1.716h1.073Zm7.205 0V25h-1.654v-7.396h1.654Zm-1.764-1.94c0-.252.083-.459.247-.623.168-.169.401-.253.697-.253.292 0 .522.084.69.253a.83.83 0 0 1 .253.622.822.822 0 0 1-.253.615c-.168.164-.398.246-.69.246-.296 0-.529-.082-.697-.246a.834.834 0 0 1-.246-.615Zm6.959 1.94v1.204h-4.169v-1.203h4.169Zm-2.966-1.811h1.647v7.164c0 .228.032.403.096.526a.512.512 0 0 0 .28.24c.119.04.258.061.417.061.114 0 .223-.007.328-.02.105-.014.189-.028.253-.041l.007 1.258a4.225 4.225 0 0 1-.478.109 3.521 3.521 0 0 1-.616.048c-.378 0-.713-.066-1.005-.198a1.481 1.481 0 0 1-.683-.664c-.164-.305-.246-.71-.246-1.216v-7.267Zm5.865-1.292V25h-1.641V14.5h1.641Zm-.287 6.528-.533-.006c.004-.51.075-.983.212-1.416.141-.433.337-.809.587-1.128a2.61 2.61 0 0 1 2.099-1.012c.365 0 .693.05.984.151.297.1.552.262.766.485.214.22.376.506.485.862.114.35.171.78.171 1.285V25h-1.654v-4.765c0-.355-.052-.638-.157-.847a.912.912 0 0 0-.445-.452 1.623 1.623 0 0 0-.717-.143c-.297 0-.559.06-.786.178-.224.118-.411.28-.561.485-.15.205-.264.442-.342.711a3.276 3.276 0 0 0-.109.861Zm17.732-1.114v3.8c-.141.188-.362.393-.663.616-.296.219-.69.408-1.182.568-.493.159-1.106.239-1.839.239a4.542 4.542 0 0 1-1.716-.315 3.753 3.753 0 0 1-1.347-.936 4.28 4.28 0 0 1-.868-1.497c-.205-.593-.308-1.267-.308-2.024v-.69c0-.752.094-1.422.281-2.01a4.268 4.268 0 0 1 .82-1.504c.355-.41.784-.72 1.285-.93.506-.214 1.078-.32 1.716-.32.816 0 1.49.136 2.023.41a2.98 2.98 0 0 1 1.245 1.12c.291.479.476 1.026.553 1.641h-1.681a2.644 2.644 0 0 0-.322-.93 1.626 1.626 0 0 0-.67-.642c-.287-.16-.66-.24-1.121-.24-.396 0-.745.076-1.046.226-.3.15-.551.372-.752.663a3.247 3.247 0 0 0-.444 1.067c-.1.419-.15.897-.15 1.435v.704c0 .547.057 1.033.171 1.456.118.424.287.782.505 1.073.224.292.495.513.814.664.319.145.679.218 1.08.218.392 0 .713-.032.964-.095a2.26 2.26 0 0 0 .595-.24c.15-.095.266-.186.348-.273v-1.976h-2.071v-1.278h3.78Zm1.422 1.47v-.157c0-.534.078-1.028.233-1.484.154-.46.378-.859.669-1.196a3.033 3.033 0 0 1 1.081-.793 3.513 3.513 0 0 1 1.449-.287c.542 0 1.025.096 1.449.287.428.187.791.451 1.087.793.296.337.522.736.677 1.196.155.456.232.95.232 1.484v.157c0 .533-.077 1.027-.232 1.483a3.555 3.555 0 0 1-.677 1.197 3.132 3.132 0 0 1-1.08.792c-.424.187-.905.28-1.443.28a3.61 3.61 0 0 1-1.456-.28 3.15 3.15 0 0 1-1.08-.793 3.536 3.536 0 0 1-.676-1.196 4.579 4.579 0 0 1-.233-1.483Zm1.648-.157v.157c0 .332.034.647.102.943.068.296.176.556.321.78.146.223.333.398.561.526.228.127.499.191.813.191.306 0 .57-.064.793-.191a1.59 1.59 0 0 0 .561-.527c.146-.223.253-.483.321-.779.073-.296.11-.61.11-.943v-.157c0-.329-.037-.639-.11-.93a2.368 2.368 0 0 0-.328-.786 1.576 1.576 0 0 0-.56-.534 1.545 1.545 0 0 0-.8-.198c-.31 0-.579.066-.807.198a1.592 1.592 0 0 0-.554.534c-.145.228-.253.49-.321.786a4.084 4.084 0 0 0-.102.93Zm6.295.157v-.157c0-.534.078-1.028.233-1.484.155-.46.378-.859.67-1.196a3.02 3.02 0 0 1 1.08-.793 3.513 3.513 0 0 1 1.449-.287c.542 0 1.026.096 1.449.287.429.187.791.451 1.087.793.296.337.522.736.677 1.196.155.456.232.95.232 1.484v.157c0 .533-.077 1.027-.232 1.483a3.555 3.555 0 0 1-.677 1.197 3.132 3.132 0 0 1-1.08.792c-.424.187-.904.28-1.442.28a3.603 3.603 0 0 1-1.456-.28 3.132 3.132 0 0 1-1.08-.793 3.538 3.538 0 0 1-.677-1.196 4.579 4.579 0 0 1-.233-1.483Zm1.648-.157v.157c0 .332.034.647.102.943.069.296.176.556.322.78.146.223.332.398.56.526.228.127.499.191.814.191.305 0 .569-.064.793-.191.228-.128.414-.303.56-.527.146-.223.253-.483.322-.779a3.93 3.93 0 0 0 .109-.943v-.157c0-.329-.036-.639-.109-.93a2.39 2.39 0 0 0-.329-.786 1.56 1.56 0 0 0-1.36-.732c-.31 0-.579.066-.807.198a1.59 1.59 0 0 0-.553.534c-.146.228-.253.49-.322.786a4.084 4.084 0 0 0-.102.93Zm11.348-3.623h1.497v7.19c0 .666-.142 1.231-.424 1.696a2.726 2.726 0 0 1-1.183 1.06c-.506.246-1.091.369-1.757.369-.282 0-.597-.041-.943-.123a3.867 3.867 0 0 1-.998-.397 2.472 2.472 0 0 1-.8-.704l.773-.97c.264.314.556.544.875.69.319.146.654.219 1.005.219.378 0 .699-.07.963-.212.269-.137.477-.34.622-.608.146-.27.219-.598.219-.985v-5.55l.151-1.675Zm-5.025 3.78v-.144c0-.56.069-1.07.205-1.531.137-.465.333-.864.588-1.196.255-.338.565-.595.93-.773a2.727 2.727 0 0 1 1.237-.273c.479 0 .887.086 1.224.26.342.173.626.421.854.745.228.319.406.701.533 1.148.133.442.231.934.294 1.477v.458a7.4 7.4 0 0 1-.3 1.449 4.003 4.003 0 0 1-.561 1.135 2.386 2.386 0 0 1-.861.738c-.337.173-.736.26-1.197.26-.451 0-.859-.094-1.223-.28a2.787 2.787 0 0 1-.93-.787 3.733 3.733 0 0 1-.588-1.19 5.263 5.263 0 0 1-.205-1.496Zm1.648-.144v.144c0 .337.032.651.095.943.069.292.171.55.308.773.141.218.319.391.533.52.219.122.476.184.773.184.387 0 .704-.082.95-.246.25-.164.442-.386.574-.663.137-.283.232-.598.287-.944v-1.237a2.988 2.988 0 0 0-.171-.752 1.996 1.996 0 0 0-.335-.608 1.397 1.397 0 0 0-.533-.41c-.214-.1-.467-.151-.759-.151-.296 0-.553.064-.772.191a1.564 1.564 0 0 0-.54.527 2.613 2.613 0 0 0-.308.779 4.24 4.24 0 0 0-.102.95Zm8.346-6.74V25h-1.654V14.5h1.654Zm5.066 10.637a3.946 3.946 0 0 1-1.484-.267 3.28 3.28 0 0 1-1.121-.759 3.367 3.367 0 0 1-.704-1.141 3.999 3.999 0 0 1-.246-1.415v-.274c0-.578.084-1.103.253-1.572.169-.47.403-.87.704-1.203a3.021 3.021 0 0 1 1.067-.773c.41-.177.854-.266 1.333-.266.528 0 .991.089 1.387.266.397.178.725.429.985.752.264.32.46.7.587 1.142.133.442.199.93.199 1.463v.704h-5.715V20.61h4.088v-.13a2.318 2.318 0 0 0-.178-.834 1.423 1.423 0 0 0-.485-.628c-.219-.16-.511-.24-.875-.24-.274 0-.518.06-.732.178a1.45 1.45 0 0 0-.526.5 2.621 2.621 0 0 0-.328.792 4.45 4.45 0 0 0-.11 1.032v.274c0 .323.044.624.13.902.091.273.224.513.397.718.173.205.383.367.629.485.246.114.526.171.84.171.397 0 .75-.08 1.06-.24.31-.159.579-.384.807-.676l.868.84c-.16.233-.367.457-.622.67-.255.21-.568.381-.937.514a3.722 3.722 0 0 1-1.271.198Z"
    />
    <Rect width={174} height={39} x={0.5} y={0.5} stroke="#747775" rx={3.5} />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M12 10h20v20H12z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default GoogleSI;