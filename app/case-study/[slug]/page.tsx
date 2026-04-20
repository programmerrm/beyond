import Image from "next/image";
import { CaseStudyData } from "@/data/caseStudy";
import TextEdtor from "@/components/text-editor/text-editor";

type CaseStudyProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function Page({ params }: CaseStudyProps) {
    const { slug } = await params;
    const caseStudy = CaseStudyData;
    const singleCaseStudy = caseStudy.find((item) => item.slug === slug);
    const info = singleCaseStudy?.info;
    const overview = singleCaseStudy?.overview;
    const challenge = singleCaseStudy?.challenge;
    const solution = singleCaseStudy?.solution;
    const systemCapability = singleCaseStudy?.system_capability;
    const integrationReadiness = singleCaseStudy?.integration_readiness;
    const operationalImpact = singleCaseStudy?.operational_impact;
    const results = singleCaseStudy?.results;
    const conclusion = singleCaseStudy?.conclusion;
    return (
        <>
            <section className="pb-14 lg:pb-27.5 pt-30 sm:pt-40 lg:pt-50">
                <div className="container">
                    <div className="max-w-216.25 mx-auto">

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-14 text-center text-white">{singleCaseStudy?.title}</h1>

                        <div className="px-5 md:px-10 py-8 md:py-12 rounded-[10px] bg-[linear-gradient(90deg,#FFFFFF_0%,#FFD3FD_100%)] flex items-center justify-between lg:flex-row flex-col gap-5 mt-6 sm:mt-8.5 mb-6 sm:mb-12">

                            <div className="w-full lg:w-auto">
                                <div className="flex flex-col sm:flex-row justify-between sm:divide-x divide-[#D3D3D3] gap-4 sm:gap-7.5">
                                    <div className="sm:pr-14 lg:pr-7.5 last:pr-0 space-y-1 sm:space-y-2.5">
                                        <h6 className="text-sm font-normal leading-6 text-[#4B5154]">{info?.company?.title}</h6>
                                        <span className="text-base leading-5 font-semibold text-[#0F1112]">{info?.company?.name}</span>
                                    </div>
                                    <div className="sm:pr-14 lg:pr-7.5 last:pr-0 space-y-1 sm:space-y-2.5">
                                        <h6 className="text-sm font-normal leading-6 text-[#4B5154]">{info?.category?.title}</h6>
                                        <span className="text-base leading-5 font-semibold text-[#0F1112]">{info?.category?.name}</span>
                                    </div>
                                    <div className="sm:pr-14 lg:pr-7.5 last:pr-0 space-y-1 sm:space-y-2.5">
                                        <h6 className="text-sm font-normal leading-6 text-[#4B5154]">{info?.timelines?.title}</h6>
                                        <span className="text-base leading-5 font-semibold text-[#0F1112]">{info?.timelines?.months}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:max-w-66 space-y-2 sm:space-y-2.5">
                                <h6 className="text-sm font-normal leading-6 text-[#4B5154]">{info?.related_tags?.title}</h6>
                                <div className="flex items-center gap-1 flex-wrap">
                                    {info?.related_tags?.tags?.map((item: any, index: number) => {
                                        return (
                                            <button key={`${item.name}-${index}`} className="bg-white text-xs sm:text-[13px] sm:leading-6 font-normal text-[#1B1B1B] rounded-full px-3 sm:px-4 py-1 border border-[#7E7E81] cursor-pointer">{item?.name}</button>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>

                        <div className="space-y-6 sm:space-y-12">
                            {overview?.map((item: any) => {
                                return (
                                    <div key={item.id}>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-10 mb-2.5 sm:mb-5">{item?.ttile}</h2>
                                        <p className="text-[#C1C1C1]">{item?.description}</p>

                                        <div className="w-full max-w-216.25 mt-6 sm:mt-12">
                                            <Image
                                                src={item?.image}
                                                alt="overview Image"
                                                width={865}
                                                height={430}
                                            />
                                        </div>
                                    </div>
                                )
                            })}

                            {challenge?.map((item: any) => {
                                return (
                                    <div key={item.id}>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:leading-10 mb-2.5 sm:mb-5">{item?.title}</h2>
                                        <p className="text-[#C1C1C1]">{item?.sub_title}</p>
                                        <ul className="text-[#C1C1C1] list-disc pl-6 mt-1">
                                            <TextEdtor description={item?.list} />
                                        </ul>
                                        <p className="text-[#C1C1C1]">{item?.description}</p>
                                    </div>
                                );
                            })}

                            {solution?.map((item: any) => {
                                return (
                                    <div key={item.id}>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:leading-10 mb-2.5 sm:mb-5">{item?.title}</h2>

                                        <p className="text-[#C1C1C1]">{item?.sub_title}</p>

                                        <p className="text-[#C1C1C1]">{item?.key_title}</p>
                                        <ul className="text-[#C1C1C1] list-disc pl-6 mt-1">
                                            <TextEdtor description={item?.list} />
                                        </ul>

                                        <div className="w-full max-w-216.25 mt-6 sm:mt-12">
                                            <Image
                                                src={item?.image}
                                                alt="solution Image"
                                                width={865}
                                                height={430}
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                            {systemCapability?.map((item: any) => {
                                return (
                                    <div key={item.id}>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:leading-10 mb-2.5 sm:mb-5">{item?.title}</h2>
                                        <p className="text-[#C1C1C1]">{item?.sub_title}</p>
                                        <ul className="text-[#C1C1C1] list-disc pl-6 mt-1">
                                            <TextEdtor description={item?.list} />
                                        </ul>
                                    </div>
                                )
                            })}

                            {integrationReadiness?.map((item: any) => {
                                return (
                                    <div key={item.id}>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:leading-10 mb-2.5 sm:mb-5">{item?.title}</h2>
                                        <p className="text-[#C1C1C1]">{item?.sub_title}</p>
                                        <ul className="text-[#C1C1C1] list-disc pl-6 mt-1">
                                            <TextEdtor description={item?.list} />
                                        </ul>
                                    </div>
                                );
                            })}

                            {operationalImpact?.map((item: any) => {
                                return (
                                    <div key={item.id}>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:leading-10 mb-2.5 sm:mb-5">{item?.title}</h2>
                                        <p className="text-[#C1C1C1]">{item?.sub_title}</p>
                                        <ul className="text-[#C1C1C1] list-disc pl-6 mt-1">
                                            <TextEdtor description={item?.list} />
                                        </ul>
                                        <div className="w-full max-w-216.25 mt-6 sm:mt-12">
                                            <Image
                                                src={item?.image}
                                                alt="oparational Impact"
                                                width={865}
                                                height={430}
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                            {results?.map((item: any) => {
                                return (
                                    <div key={item.id}>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:leading-10 mb-2.5 sm:mb-5">{item?.title}</h2>
                                        <p className="text-[#C1C1C1]">{item?.sub_title}</p>
                                        <TextEdtor description={item?.list} />
                                    </div>
                                );
                            })}

                            {conclusion?.map((item: any) => {
                                return (
                                    <div key={item?.item}>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:leading-10 mb-2.5 sm:mb-5">{item?.title}</h2>
                                        <p className="text-[#C1C1C1]">{item?.description}</p>
                                    </div>
                                );
                            })}

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
