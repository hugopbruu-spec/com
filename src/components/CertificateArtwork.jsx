function verifiedSizes(large) {
  return {
    issuer: large
      ? "text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px]"
      : "text-[7px] sm:text-[8px] md:text-[10px]",
    heading: large
      ? "text-[7px] sm:text-[9px] md:text-[12px] lg:text-[16px]"
      : "text-[6px] sm:text-[7px] md:text-[9px]",
    body: large
      ? "max-w-full text-[16px] leading-[1.05] sm:text-[22px] md:max-w-[520px] md:text-[34px] lg:max-w-[820px] lg:text-[56px]"
      : "max-w-full text-[10px] leading-[1.05] sm:text-[13px] md:max-w-[320px] md:text-[21px]",
    completed: large
      ? "mt-1 text-[7px] sm:text-[9px] md:text-[12px] lg:mt-2 lg:text-[16px]"
      : "mt-1 text-[6px] sm:text-[7px] md:text-[8px]",
    intro: large
      ? "text-[7px] sm:text-[9px] md:text-[12px] lg:text-[16px]"
      : "text-[6px] sm:text-[7px] md:text-[8px]",
    recipient: large
      ? "text-[11px] sm:text-[15px] md:text-[18px] lg:text-[22px]"
      : "text-[8px] sm:text-[9px] md:text-[11px]",
    signature: large
      ? "text-[10px] sm:text-[14px] md:text-[20px] lg:text-[28px]"
      : "text-[7px] sm:text-[9px] md:text-[13px]",
    footer: large
      ? "mt-1 text-[6px] sm:text-[8px] md:text-[11px] lg:mt-2 lg:text-[14px]"
      : "mt-1 text-[5px] sm:text-[6px] md:text-[8px]",
    brand: large
      ? "text-[22px] sm:text-[34px] md:text-[54px] lg:text-[84px]"
      : "text-[12px] sm:text-[18px] md:text-[34px]",
  };
}

function VerifiedArtwork({ certificate, large }) {
  const sizes = verifiedSizes(large);

  return (
    <div className="relative aspect-[1.414/1] w-full overflow-hidden rounded-[10px] border border-[#d5dee7] bg-[#eef3f7] text-black shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(105,213,255,0.08),rgba(238,243,247,0)_18%,rgba(238,243,247,1))]" />
      <div className="absolute inset-[18px] rounded-[20px] border border-[#d8e0e8]" />

      <div
        className={`relative flex h-full flex-col ${
          large
            ? "px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-14 lg:py-12"
            : "px-3 py-3 sm:px-4 sm:py-4"
        }`}
      >
        <div>
          <p className={`${sizes.issuer} font-bold leading-tight text-[#102231]`}>
            AWS Training & Certification
          </p>
          <p className={`${sizes.heading} leading-tight text-[#3c4b57]`}>
            Completion Certificate
          </p>
        </div>

        <div className={large ? "mt-3 sm:mt-5 md:mt-8 lg:mt-12" : "mt-3 sm:mt-4 md:mt-6"}>
          <h3
            className={`${sizes.body} break-words font-normal tracking-[-0.03em] text-[#07131c]`}
          >
            {certificate.body}
          </h3>
          <p className={`${sizes.completed} text-[#3c4b57]`}>
            {certificate.completedAt}
          </p>
        </div>

        <div className={large ? "mt-4 sm:mt-6 md:mt-10 lg:mt-14" : "mt-3 sm:mt-4 md:mt-7"}>
          <p className={`${sizes.intro} text-[#3c4b57]`}>Awarded to</p>
          <p className={`${sizes.recipient} break-words leading-tight text-[#07131c]`}>
            HUGO HENRIQUE
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 sm:gap-4 md:gap-6">
          <div className="min-w-0 max-w-[55%]">
            <p
              className={`${sizes.signature} truncate italic leading-none text-[#102231]`}
              style={{ fontFamily: "cursive" }}
            >
              Michelle Vaz
            </p>
            <p className={`${sizes.footer} text-[#3c4b57]`}>
              Managing Director, AWS Training & Certification
            </p>
          </div>

          <div className="shrink-0 text-right leading-none">
            <p className={`${sizes.brand} font-bold tracking-[-0.06em] text-[#41525f]`}>
              aws
            </p>
            <div className="mt-1 flex justify-end">
              <div
                className={`${
                  large
                    ? "h-[3px] w-[18px] sm:h-[4px] sm:w-[28px] md:h-[7px] md:w-[46px] lg:h-[10px] lg:w-[68px]"
                    : "h-[2px] w-[10px] sm:h-[3px] sm:w-[16px] md:h-[4px] md:w-[28px]"
                } rotate-[18deg] rounded-full border-b-[2px] border-[#41525f] sm:border-b-[3px]`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CertificateArtwork({ certificate, large = false }) {
  return <VerifiedArtwork certificate={certificate} large={large} />;
}
