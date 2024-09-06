"use client";

import Link from "next/link";
import { useSurveyForm } from "@/hooks/useSurveyForm";
import { formatDate } from "@/utils/formatDate";
import { useSearchParams } from "next/navigation";


interface Props {
  params: {id: string}
}

export default function StatisticPage({params}: Props) {
  const { formData } = useSurveyForm();
  const searchParams = useSearchParams();
  const surveyReportsId = searchParams.get("surveyReportsId");
  console.log(surveyReportsId, 'surveyReportsId');
  
  return (
    <div>
      asd
    </div>
  );
}
