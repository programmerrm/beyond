import { CaseStudyData } from "@/data/caseStudy";
import CaseStudyCard from "@/components/case-study/caseStudyCard";

export default function Page() {
    const caseStudy = CaseStudyData;
    if (!caseStudy) return null;
    return (
        <>
            <section className="pb-14 lg:pb-27.5 pt-7 lg:pt-20">
                <div className="container">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-14 text-center max-w-203.25 mx-auto text-white">Transforming operations through intelligence and automation</h1>
                    <div className="grid sm:grid-cols-3 gap-y-10 gap-x-5 mt-10 md:mt-20">
                        {caseStudy?.map((item) => {
                            return (
                                <CaseStudyCard
                                    key={item.id}
                                    image={item?.image}
                                    title={item?.title}
                                    description={item?.description}
                                    href={`/case-study/${item?.slug}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
