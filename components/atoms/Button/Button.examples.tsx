/**
 * Button Component - Usage Examples
 *
 * This file demonstrates all variants, sizes, and features
 * of the Atomic Button component with Tutor Solution BD brand colors.
 *
 * PRIMARY BRAND COLOR: Teal Cyan (#00b3b3)
 * ALL TEXT: Black (#000000)
 */

import Button from "./Button";
import { ChevronRight, Download, Heart, Plus, Search } from "lucide-react";
import { BRAND_COLORS } from "@/config/colors.config";

export function ButtonExamples() {
  return (
    <div className="space-y-12 p-8 bg-gray-50 min-h-screen">
      {/* === VARIANTS === */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="filled" color="primary">
            Filled Primary
          </Button>
          <Button variant="outline" color="primary">
            Outline Primary
          </Button>
          <Button variant="ghost" color="primary">
            Ghost Primary
          </Button>
          <Button variant="link" color="primary">
            Link Primary
          </Button>
        </div>
      </section>

      {/* === COLORS === */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Colors (Filled)</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="filled" color="primary">
            Primary (Cyan)
          </Button>
          <Button variant="filled" color="secondary">
            Secondary (Green)
          </Button>
          <Button variant="filled" color="success">
            Success (Emerald)
          </Button>
          <Button variant="filled" color="error">
            Error (Red)
          </Button>
          <Button variant="filled" color="neutral">
            Neutral (Gray)
          </Button>
        </div>
      </section>

      {/* === SIZES === */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Sizes</h2>
        <div className="flex items-end gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium (Default)</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </section>

      {/* === WITH ICONS === */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button iconLeft={<Plus size={16} />}>Add Item</Button>
          <Button iconRight={<ChevronRight size={16} />}>Next Step</Button>
          <Button
            iconLeft={<Download size={16} />}
            iconRight={<ChevronRight size={16} />}
          >
            Download File
          </Button>
          <Button
            variant="outline"
            color="error"
            iconLeft={<Heart size={16} />}
          >
            Favorite
          </Button>
        </div>
      </section>

      {/* === LOADING STATE === */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Loading State</h2>
        <div className="flex flex-wrap gap-4">
          <Button isLoading>Loading...</Button>
          <Button variant="outline" isLoading>
            Processing
          </Button>
          <Button variant="ghost" isLoading size="sm">
            Saving
          </Button>
        </div>
      </section>

      {/* === DISABLED STATE === */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Disabled State</h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled Primary</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
          <Button variant="filled" color="error" disabled>
            Disabled Error
          </Button>
        </div>
      </section>

      {/* === FULL WIDTH === */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Full Width</h2>
        <div className="space-y-2 max-w-md">
          <Button fullWidth>Full Width Button</Button>
          <Button fullWidth variant="outline">
            Full Width Outline
          </Button>
        </div>
      </section>

      {/* === ROUNDED VARIANTS === */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Rounded Options</h2>
        <div className="flex flex-wrap gap-4">
          <Button rounded="none">None</Button>
          <Button rounded="sm">Small</Button>
          <Button rounded="md">Medium (Default)</Button>
          <Button rounded="lg">Large</Button>
          <Button rounded="full">Full</Button>
        </div>
      </section>

      {/* === REAL WORLD EXAMPLES === */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Real World Use Cases</h2>
        <div className="space-y-6">
          {/* CTA Buttons */}
          <div className="space-y-2">
            <h3 className="font-semibold">Call-to-Action Buttons</h3>
            <div className="flex gap-4">
              <Button size="lg" iconRight={<ChevronRight size={20} />}>
                Get Started Free
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Search Bar Button */}
          <div className="space-y-2">
            <h3 className="font-semibold">Search Action</h3>
            <div className="flex gap-2 max-w-md">
              <input
                type="text"
                placeholder="Search tutors..."
                className="flex-1 px-4 py-2 border rounded-lg"
              />
              <Button iconLeft={<Search size={16} />}>Search</Button>
            </div>
          </div>

          {/* Form Actions */}
          <div className="space-y-2">
            <h3 className="font-semibold">Form Actions</h3>
            <div className="flex gap-3">
              <Button type="submit" color="success">
                Save Changes
              </Button>
              <Button variant="outline" color="neutral">
                Cancel
              </Button>
              <Button variant="ghost" color="error">
                Delete
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ButtonExamples;
