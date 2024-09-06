"use client";

import Link from "next/link";
import * as styles from "./SubscribeShop.css";
import { useSurveyForm } from "@/hooks/useSurveyForm";
import { formatDate } from "@/utils/formatDate";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { resultSubtitle } from "@/components/Statistic/StatisticSection.css";
import SubscribeRecommend from "@/components/Subscribe/SubscribeRecommend/SubscribeRecommend";
import SubscribeAmount from "@/components/Subscribe/SubscribeAmount/SubscribeAmount";

interface Props {
  params: { id: string };
}

export default function SubscribePage({ params }: Props) {
  const { formData } = useSurveyForm();
  const searchParams = useSearchParams();
  const surveyReportsId = searchParams.get("surveyReportsId");

  return (
    <div className={styles.SuscribeContainer}>
      <SubscribeRecommend name={formData.name}/>
      <SubscribeAmount/>
    </div>
  );
}
