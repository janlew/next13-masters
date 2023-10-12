import { Section } from "@/components/layout/Section";
import { CollectionsButtons } from "@/components/organisms/CollectionsButtons";
import { SuggestedProductsGrid } from "@/components/organisms/SuggestedProductsGrid";

export default function Home() {
	return (
		<>
			<Section>
				<SuggestedProductsGrid />
			</Section>
			<Section>
				<CollectionsButtons />
			</Section>
		</>
	);
}
